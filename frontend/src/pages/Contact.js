// // src/pages/Contact.js
// import React, { useEffect, useState } from 'react';
// import './Contact.css';

// export default function Contact() {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const items = JSON.parse(localStorage.getItem('cart')) || [];
//     setCartItems(items);
//   }, []);

//   return (
//     <div className="contact-container">
//       <h2 className="contact-title">Contact Us to Purchase</h2>

//       <div className="cart-summary">
//         <h4>Your Selected Products</h4>
//         {cartItems.length > 0 ? (
//           <ul className="cart-list">
//             {cartItems.map((item, index) => (
//               <li key={index}>
//                 <span>{item.name}</span>
//                 <span>₹{item.price}</span>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="empty-cart">No items in your cart.</p>
//         )}
//       </div>

//       <form className="contact-form">
//         <div className="form-group">
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email (optional)" />
//           <input type="tel" placeholder="Your Phone (optional)" />
//         </div>
//         <textarea rows="5" placeholder="Your Message" required></textarea>
//         <button type="submit">Send Message</button>
//       </form>

//       <div className="contact-info">
//         <p>📞 Phone: <a href="tel:+918005460354">8005460354</a></p>
//         <p>📧 Email: <a href="mailto:prince@gmail.com">prince@gmail.com</a></p>
//       </div>
//     </div>
//   );
// }


// src/pages/Contact.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Contact.css';

export default function Contact() {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || cartItems.length === 0) {
      alert('Name and cart items are required!');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/purchase', {
        ...formData,
        cartItems,
      });

      alert(res.data.message);
      setFormData({ name: '', email: '', phone: '', message: '' });
      localStorage.removeItem('cart');
      setCartItems([]);
    } catch (error) {
      console.error('Error sending purchase:', error);
      alert('Failed to send purchase request.');
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us to Purchase</h2>

      <div className="cart-summary">
        <h4>Your Selected Products</h4>
        {cartItems.length > 0 ? (
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index}>
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-cart">No items in your cart.</p>
        )}
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email (optional)"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone (optional)"
          />
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>📞 Phone: <a href="tel:+918005460354">8005460354</a></p>
        <p>📧 Email: <a href="mailto:princelko8@gmail.com">princelko8@gmail.com</a></p>
      </div>
    </div>
  );
}

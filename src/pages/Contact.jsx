import React from 'react'

const Contact = () => {
  return (
    <main className="section">
    <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">Location</h2>
                    <p>Uzbekistan, Tashkent</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram / WhatsApp</h2>
                    <p><a href="tel:+998990853558">+998 99 085 35 58</a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a href="mailto:madazimovsunnatillo02@gmail.com">madazimovsunnatillo02@gmail.com</a></p>
                </li>
            </ul>

    </div>
</main>
  )
}

export default Contact

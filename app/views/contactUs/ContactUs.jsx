import React from "react";

const ContactUs = () => {
  return (
      <section style={{paddingLeft: '2%', paddingTop: '1%'}}>
           <div>
               Kitchener, ON, Canada
            </div>
            <div>
                For business enquiries, please contact us at:
            </div>
            <div>
                <b>
                    Phone:
                </b>
                (226) 899-1600
            </div>
            <div>
                <b>
                    Email:
                </b>
                sales@orionsalescanada.com
            </div>
            <form action="https://formspree.io/f/xnqobvyw" method="POST">
                <label>
                    Name:
                    <br/>
                    <input type="text" name="name" placeholder="Name" required />
                </label>
                <br/>
                <label>
                    Email:
                    <br/>
                    <input type="text" name="email" placeholder="Email" required />
                </label>
                <br/>
                <label>
                    Phone:
                    <br/>
                    <input type="text" name="phone" placeholder="Phone" required />
                </label>       
                <br/>    
                <label>
                    Message:
                    <br/>
                    <textarea cols="100" rows="5" name="message" placeholder="Message" required></textarea>
                </label>       
                <br/>   
                <button type="submit">Send</button>
            </form>
      </section>
  )
}

export default ContactUs;

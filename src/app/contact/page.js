import React from "react";
import ContactCard from "@/app/components/ContactCardss";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactFormss";

const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We'd love to hear <span> from you </span>
          </h2>

          <ContactForm />
        </section>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.380762624513!2d88.37649007504288!3d22.676865329141222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f899adb6e5139f%3A0x8e43eace10c1361d!2sNarula%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1694524091535!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className={styles.mapping}
      ></iframe>
    </>
  );
};

export default Contact;

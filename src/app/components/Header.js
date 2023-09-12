import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "@/app/styles/navbar.module.css";
import Nav from "@/app/components/Nav";

const Header = () => {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <Image src="/logo.png" alt="my-logo-img" width={150} height={40} />
        </Link>
      </div>
      <Nav />
    </header>
  );
};

export default Header;

import type { NextPage } from "next";
import Head from "next/head";
import { MouseEventHandler, useState } from "react";
import styles from "../styles/Home.module.css";
import { api } from "../utils/trpc";

type ScanTypes = "small" | "medium" | "large";

const Contact: NextPage = () => {
  const [cname, setCname] = useState("");
  const [email, setEmail] = useState("");
  const [scantype, setScantype] = useState<ScanTypes>("small");

  const contactMutation = api.contact.useMutation({
    onSuccess: (data) => {
      alert(data.responseFromServer);
    },
  });

  const submitForm: MouseEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    contactMutation.mutate({ companyname: cname, email, scantype });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="container">
          <form>
            <label>Company Name</label>
            <input
              type="text"
              id="fname"
              name="companyname"
              placeholder="Consultants Inc..."
              value={cname}
              onChange={(e) => setCname(e.currentTarget.value)}
            />

            <label>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="consult@thing.com"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />

            <label>Scan Type</label>
            <select
              id="scantype"
              name="scantype"
              value={scantype}
              onChange={(e) => setScantype(e.currentTarget.value as ScanTypes)}
            >
              <option value="small">Small $</option>
              <option value="medium">Medium $$</option>
              <option value="large">Large $$$</option>
            </select>

            <input type="submit" value="Submit" onClick={submitForm} />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;

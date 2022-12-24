import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
import { ImpulseSpinner } from "react-spinners-kit";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [state, setState] = useState({
    loading: false,
    sizeOfData: 1,
    stateData: [],
  });
  const fetchData = () => {
    Promise.all([
      setState({
        ...state,
        loading: true,
      }),
    ]).then(() => {
      const url = `/api/getData?sizeOfData=${state.sizeOfData}`;
      axios.get(url).then(({ data }) => {
        const finalData = data["data"];
        console.log("finalData is", finalData);
        setState({
          ...state,
          stateData: finalData,
          loading: false,
        });
      });
    });
  };
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"></meta>
      </Head>
      <div>
        {state.loading ? (
          <ImpulseSpinner color="#a83254" />
        ) : (
          <button className={styles.btn} onClick={() => fetchData()}>Click me to fetch data</button>
        )}

        <ul>
          {state.stateData.map((each) => {
            return (
              <li key={each.id}>
                {each.name}, ${each.id}
              </li>
            );
          })}
        </ul>
        <input
          type="number"
          value={state.sizeOfData}
          onChange={(e) => {
            setState({
              ...state,
              sizeOfData: Number(e.target.value),
            });
          }}
        />
      </div>
    </>
  );
}

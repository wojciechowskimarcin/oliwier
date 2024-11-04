import s from './PriceSection.module.scss';
import {useEffect, useState} from "react";

const PriceSection = () => {
    const [dane, setDane] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const data = await fetch("https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTH,DOG&tsyms=PLN&api_key=b5b71358c0a1de505b395c192ccb04645d8076288c16802d46e95a5f1dc98684");
                if (!data.ok){
                    throw new Error("Problem z pobraniem danych");
                }
                else{
                    //console.log(data);
                }
                const result = await data.json();
                setDane(result);
                //console.log(dane.BTC.PLN);

            }
            catch(e){
                setError(e)
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, []);
    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error.message}</p>;

    return (
        <div className={s.priceMainBlock}>
            <h1>Cryptocurrency Prices</h1>
            <section className={s.priceSectionBlock}>
                <div className={s.cryptoBlock}>
                    <div className={s.cryptoImg}></div>
                    <p>Bitcoin</p>
                    <p>{dane.BTC.PLN} zł</p>
                </div>
                <div className={s.cryptoBlock}>
                    <div className={s.cryptoImg}></div>
                    <p>DOG</p>
                    <p>{dane.DOG.PLN} zł</p>
                </div>
                <div className={s.cryptoBlock}>
                    <div className={s.cryptoImg}></div>
                    <p>LTH</p>
                    <p>{dane.LTH.PLN} zł</p>
                </div>
                <div className={s.cryptoBlock}>
                    <div className={s.cryptoImg}></div>
                    <p>ETH</p>
                    <p>{dane.ETH.PLN} zł</p>
                </div>


            </section>

        </div>
    );
};

export default PriceSection;
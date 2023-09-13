import appleDevices from "../../assets/img/apple_devices.jpg";
import samsungDevices from "../../assets/img/samsung_devices.jpg";

export default function Home() {
  return (
    <>
      <div>
        <h1>Promoção</h1>
        <section>
          <div>
            <img src={appleDevices} alt="" />
            <p>10% de Desconto em produtos Apple</p>
          </div>
          <div>
            <img src={samsungDevices} alt="" />
            <p>15% de Desconto em produtos Samsung</p>
          </div>
        </section>
      </div>
    </>
  );
}

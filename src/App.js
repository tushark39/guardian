import {Base} from './screen/Base'
import {About,AvailableOn,ContactUs,Counter,DownloadNow,Features,PurchaseNow,Screen,Testimonial} from './screen/Screens'

function App() {
  return (
    <Base>
      <About/>
      <Testimonial/>
      <Features />
      <PurchaseNow />
      <Screen />
      <Counter/>
      <DownloadNow/>
      <AvailableOn/>
      <ContactUs/>
    </Base>
  );
}

export default App;

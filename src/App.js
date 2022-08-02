import "./App.css";
import qrcode from 'qrcode'
import { useState} from "react";
import QrReader from 'react-qr-scanner'


function App() {

const [url, seturl] = useState("");
const [image, setimage] = useState("");
const [selected, setSelected] = useState("environment");
const [data, setdata] = useState("");
const [start, setstart] = useState(false);



const handleError=(error)=>{
  console.log(error);
}

const handleScan=async(text)=>{
 const k=text;
 console.log(k.text);
 setdata(k.text);

}





const generateqr=()=>{

  qrcode.toDataURL(url,(error,url)=>{
    if(error)
    {
      console.log(error);

    }
    setimage(url)
  })

}


  return (
    <>
      <div className="justify-center items-center">
        <div className=" flex justify-center item-center mt-20">
          <h1 className="md:text-5xl text-4xl mr-5 md:mr-0 font-semibold"> QR code <span className="font-sans text-green-500 font-bold underline decoration-red-500 underline-offset-2">Simulator</span>  </h1>
        </div>

        <div className="mt-10 flex justify-center items-center">
        <div>
        
        <h1 className="text-4xl font-bold underline underline-offset-1 decoration-orange-500" >Annex</h1>
        </div>
        </div>

        <div>
          <div className="mt-10 flex justify-center items-center ">
          <div className="md:flex">
            <input 
            onChange={(e)=>seturl(e.target.value)}
            value={url}
              type="text"
              placeholder="Link https://github.com"
              className="bg-gray-300 px-5 py-2 md:w-64 w-80 h-10 rounded-lg shadow-xl "
            />
            <div className=" shadow-xl box px-4 py-2 md:w-auto  w-28 md:ml-10 ml-0   md:mt-0 mt-10 bg-green-400 rounded-lg hover:ring-2 ring-black ">
              <button className="text-xl font-semibold" onClick={generateqr}>Generate</button>
            </div>
            </div>



          

          </div>

          { image &&<>
            
            <div className="flex justify-center item-center mt-20  md:mr-0">
          <img src={image} alt="not resposen" className='w-48 h-48 border-2 border-gray-200 shadow-lg' />

          
          </div>

          <div className="flex justify-center items-center mt-10  md:mr-0">
          <div className="box px-3 py-2 border-4 border-sky-500 rounded-lg shadow-lg cursor-pointer">
          <a href={image} download={image} className='md:text-2xl text-xl font-semibold '> download </a>
          </div>
          </div>
            
            </>
          }

 </div>

 <div className="flex justify-center item-center md:mr-0  mt-10 ">
 <div className="flex " >
 <div className="box px-3 py-1 bg-sky-400 rounded-lg mr-10 font-semibold text-xl shadow-lg  ">
 <button onClick={()=>setstart(true)}>scan now</button> 
 </div>
<div className="box px-3 py-1 bg-sky-400 rounded-lg font-semibold text-xl shadow-lg ">
<button onClick={()=>{setstart(false)
  setdata('')}}>stop now</button>
</div>
 </div>
 </div>
 

  { start &&
    <>
    <div className="flex justify-center item-center mt-10 ">
 
 <QrReader
   className="border-4 border-red-500 shadow-lg rounded-md w-80"
          delay={300}
          facingMode={setSelected}
         // style={{width:"300px"}}
          onError={handleError}
          onScan={handleScan}
          
          />


          </div>

          <div className="flex justify-center item-center mt-10 ">

<h1 className="text-xl font-medium ">scan result is = <span className="text-2xl font-semibold text-green-500">{data}</span> </h1>

          </div>



          </>

  
  
        }

  
        

  















</div> 

     




      





    </>
  );
}

export default App;

'use client'
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { useEffect, useState } from "react";
import { IoCopy } from "react-icons/io5";
import { PiUploadFill } from "react-icons/pi";


export default function page({params}) {
    const [selectMethod, setSelectMethod] = useState('');
    const [copied, setCopied] = useState(false);
    const [isBNB, setIsBNB] = useState(false);
    const [isBTC, setIsBTC] = useState(false);
    const [isUpld, setIsUpld] = useState(false);
    const [file, setFile] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState({});
    const planName = params.id;

    const plans = [
      {name: 'diamond', rate:'7% Weekly'},
      {name: 'silver', rate:'5% Weekly'},
      {name: 'gold', rate:'9% Weekly'},
      {name: 'generational', rate:'12% Weekly'},
    ]

    useEffect(()=>{
      setSelectedPlan(plans.filter(p=> p.name === planName)[0]);
    },[]);

    const handlePayment = () => {
      windows.location.href='/invest';
    }

    const handleCopy = () => {
        const textToCopy = document.querySelector(".copy-text").textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      };

      const handleCopyI = () => {
        const textToCopy = document.querySelector(".copy-textI").textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      };

    const handleChange = (e)=> {
       setSelectMethod(e.target.value)
    }

    const handleUpload = (e)=>{
        setFile(e.target.files[0]);
    }

    useEffect(()=>{
        if(selectMethod==='BTC TRC 20'){
            setIsBNB(false);
            setIsBTC(true);
            setIsUpld(true);
        }else if(selectMethod==='BNB'){
            setIsBNB(true);
            setIsBTC(false);
            setIsUpld(true);
        }else{
            setIsBNB(false);
            setIsBTC(false);
            setIsUpld(false);
        }
    },[selectMethod])

  return (
    <div className='flex w-full'>
      <Sidebar title='invest'/>
      <div className='w-full mb-20'>
      <Topbar title='invest'/>
      <div className='flex flex-col p-5 gap-2 max-sm:items-center'>
        <h1 className='text-2xl w-full max-sm:text-center capitalize'>{selectedPlan.name}</h1>
        <h2 className='text-col font-bold w-full max-sm:text-center mt-10'>{`Start earning on an interest rate of up ${selectedPlan.rate}`}</h2>
        <select onChange={handleChange} value={selectMethod} name="" id="" className="bg-transparent mt-5 outline-none p-5 border border-[#00eaff0a] rounded-lg">
            <option value="Choose payment method" className="p-2 text-[#a2a1ab]">Choose payment method</option>
            <option value="BTC TRC 20" className="p-2 text-[#a2a1ab]">BTC TRC 20</option>
            <option value="BNB" className="p-2 text-[#a2a1ab]">BNB</option>
        </select>
       {isBTC && <div className="p-5 rounded-lg relative bg-[#00eaff0a] w-[300px] flex gap-2 justify-between items-center"><span className="copy-text font-[200]">jiruwr90fhcnew9uerqu90wef</span> <IoCopy onClick={handleCopy} className="text-3xl text-[#00eaff75] cursor-pointer"/>
        {copied && (
            <div className="absolute bottom-0 right-0 p-2 text-black font-bold bg-[#00eaffb0] rounded-lg">
              Copied!
            </div>
          )}
        </div>}
        {isBNB && <div className="p-5 rounded-lg relative bg-[#00eaff0a] w-[300px] flex gap-2 items-center"><span className="copy-textI font-[200]">8E8E8DH0hshhddhHS8bHHHHH</span> <IoCopy onClick={handleCopyI} className="text-3xl text-[#00eaff75] cursor-pointer"/>
        {copied && (
            <div className="absolute bottom-0 right-0 p-2 text-black font-bold bg-[#00eaffb0] rounded-lg">
              Copied!
            </div>
          )}
        </div>}
        {isUpld && <div className="w-full mt-5 flex flex-col max-sm:items-center">
            <h1 className="text-sm max-sm:w-full max-sm:text-center">We are ensuring security and safe processes , please drop a screenshot of proof of payment</h1>
            <input onChange={handleUpload} type="file" id='upload' accept="image/*" className=" hidden"/>
            <label htmlFor="upload" className="flex justify-center items-center w-[300px] py-5 rounded-lg mt-5 border border-[#00eaff15] animate-pulse">
              <PiUploadFill className="text-5xl"/></label>
            </div>}
            {file && <img src={URL.createObjectURL(file)} alt="Selected image" className="w-[300px] rounded-lg h-auto object-contain"/>}
           {file && <button onClick={handlePayment} className="mt-5 bg-col py-5 w-[300px] hover:opacity-[.8] text-black font-bold rounded-lg">Done</button>}
      </div>

      </div>
    </div>
  )
}

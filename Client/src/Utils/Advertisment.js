import doctor from '../assets/doctor.png'
import DeliverMan from '../assets/deliverman.png'
import Bankcard from '../assets/BankCard.png'
import { TbHeartRateMonitor } from "react-icons/tb";
import { CiCreditCard1 } from "react-icons/ci";
import { LiaParachuteBoxSolid } from "react-icons/lia";
import { FaArrowRight } from "react-icons/fa";



export const advertisment = [
    {
        id:"01",
        title:"Don't have a Prescriptions?",
        desc:"Upload only .jpg .png or .pdf files Size limit is 15 MB",
        button:"Start Consulations",
        icon: TbHeartRateMonitor,
        img: doctor,
        bg:"bg-[#fcbe8f]",
        text:"text-[#250a2e]",
        btntext:"text-[#fcbe8f]",
        btn:"bg-[#250a2e]",
    },
    {
        id:"02",
        tag:"Delivery",
        tagIcon:LiaParachuteBoxSolid,
        texttag:"text-[#ffeb69]",
        bgtag:"bg-[#1f221d]",
        title:"Enjoy Free Delivery within 2 hours",
        button:"Order Now",
        icon: FaArrowRight,
        img: DeliverMan,
        bg:"bg-[#ffeb69]",
        text:"text-[#1f221d]",
        btntext:"text-[#1f221d]",
        btn:"bg-[#fff]",
    },
    {
        id:"03",
        tag:"Membership Card",
        tagIcon:CiCreditCard1,
        texttag:"text-[#a0e870]",
        bgtag:"bg-[#143300]",
        title:"You can enjoy a 5% discount using our health card",
        button:"Get Health Card",
        icon: FaArrowRight,
        img: Bankcard,
        bg:"bg-[#a0e870]",
        text:"text-[#143300]",
        btntext:"text-[#1f221d]",
        btn:"bg-[#fff]",
    },
]
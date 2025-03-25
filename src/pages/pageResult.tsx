import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import image from '../assets/imgs/bg_home_v2.png'



export default function PageResult(){
    interface DataResult {
    imageBg:string,
    title:string,
    desc:string,
    imageDownload:string
    downloadName:string
    }


    const location = useLocation()
    

    const allData:DataResult[] = [
        {
            imageBg:'/img/bg_home_v1.png',
            title: 'Seu pet é do RAP',
            desc:'ele é safado demais',
            imageDownload:'/img/dog rap.png',
            downloadName: 'Dog do Rap.png'
        }
    ]


   
    const [actualData,setAD] = useState<DataResult>()

    

    useEffect(()=>{
        const data = location.state
        
        if (data.filter((value:number)=>value>50).length > 1){
            setAD(allData[0])
        }
        console.log(actualData)
    },[])

    return(
        <>
        {
            actualData ?

            <div>
                <h1>{actualData.title}</h1>
                <a href={actualData.imageDownload} download={actualData.downloadName}><button>BAIXAR</button></a>
            </div>
            :
            <></>
        }
        </>
    )
}
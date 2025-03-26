import { CSSProperties, useEffect, useState } from 'react'
import Style from './all.module.css'
import dogBrega from '/img/dog brega.png'
import dogSamba from '/img/dog samba.png'
import dogRap from '/img/dog rap.png'
import { Navigate, useNavigate } from 'react-router-dom'
export default function MainPage(){

    interface Data{
        question:string,
        percentageAwnser:number
    }
    const allData:Data[]=[
        {
            question:'Em um dia ensolarado, seu pet gosta de ir à praia?',
            percentageAwnser:50
        },
        {
            question:'Seu pet gosta de brincadeiras que envolvam força?',
            percentageAwnser:50
        },
        {
            question:'Seu pet tem energia para qualquer tipo de rolê',
            percentageAwnser:50
        },
        {
            question:'Seu pet é mais desapegado do que carente?',
            percentageAwnser:50
        },
        {
            question:'Quando uma briga se inicia, seu pet geralmente está no meio?',
            percentageAwnser:50
        },
        {
            question:'Seu pet é obediente?',
            percentageAwnser:50
        },
        {
            question:'Seu pet gosta de ganhar atenção de qualquer pessoa?',
            percentageAwnser:50
        }
        ,{
            question:'Ao chegar pessoas na sua casa, seu pet se esconde para não interagir?',
            percentageAwnser:50
        },
        {
            question:'O seu pet consegue fazer amigos facilmente?',
            percentageAwnser:50
        },
        {
            question:'Seu pet fica estressado quando está no meio de muitas pessoas?',
            percentageAwnser:50
        }

    ]
    const [allValues,setAllValues] = useState<number[]>([])
    const [question,setQuestion] = useState<number>(-1)
    const [actualData,setActualData] = useState<Data>()
    const [actualValue,setActualValue] = useState<number>(50)
    const [bgImage,setBgImage] = useState<string>('/img/bg_home_v1.png')
    const [respValue,setRespValue] = useState<string>('')
    const navigate = useNavigate()

     
    useEffect(()=>{

        if (actualValue < 25){
            setRespValue('De jeito nenhum!')
        }
        if (actualValue >= 25){
            setRespValue('Acho que não, hein!')
        }
        if (actualValue >= 50){
            setRespValue('Acredito que sim!')
        }
        if (actualValue >= 75){
            setRespValue('Com certeza!')
        }

    },[actualValue])

    const handleEvent = (event:React.ChangeEvent<HTMLInputElement>)=>{
        const newValue = Number(event.target.value);
        setActualValue(newValue)
    }
    useEffect(()=>{
        setActualData(allData[question])

        if (question>=0){
        setBgImage('/img/bgs/bg1.png')
        allValues.push(actualValue)
        setActualValue(50)
        }

        if (question >= allData.length){
            navigate('/result', {state:allValues})
        }

        if (question>2){
            setBgImage('/img/bgs/bg2.png')
        } 
        if(question>4){
            setBgImage('/img/bgs/bg3.png')
        }
        if(question>6){
            setBgImage('/img/bgs/bg4.png')
        }
        if(question>8){
            setBgImage('/img/bgs/bg5.png')
        }
        

    },[question])
    

    return(
        <>
        <div className={Style.container} style={{backgroundImage:`url(${bgImage})`, backgroundSize:'cover'}}>
            <h1 className={Style.titleFirstPage} 
                style={question == -1? {visibility:"visible"}:{visibility:"hidden"}}>
                    Qual o ritmo do seu Pet?
            </h1>
            <button onClick={()=>{setQuestion(0)}} style={question == -1? {visibility:"visible"}:{visibility:"hidden"}} className={Style.nextButton} >VAMOS DESCOBRIR!</button>
            <img src={dogBrega} alt="" className={Style.dogBrega} style={question == -1? {visibility:"visible"}:{visibility:"hidden"}} />
            <img src={dogSamba} alt="" className={Style.dogSamba} style={question == -1? {visibility:"visible"}:{visibility:"hidden"}} />
            <img src={dogRap} alt="" className={Style.dogRap} style={question == -1? {visibility:"visible"}:{visibility:"hidden"}} />
            <div className={Style.containerQuestion} style={question >= 0 ? {visibility:"visible"}:{visibility:"hidden"} }>
                <h1 className={Style.question}>{actualData?.question}</h1>
                <h3 className={Style.respValue}>{respValue}</h3>
                <input className={Style.inputRange} type='range' min={0} max={100} step="1" onChange={handleEvent}/>
                <img src="./volume.png" alt="volume" className={Style.soundIcon}/>
                <button onClick={()=>{console.log(allValues); setQuestion(question+1)}} className={Style.nextButtonQuestion}>Próximo</button>
            </div>
        </div>
       
        </>
    )
}

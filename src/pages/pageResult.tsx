import { CSSProperties, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import image from '../assets/imgs/bg_home_v2.png'
import Style from './all.module.css'



export default function PageResult(){
    interface DataResult {
    imageBg:string,
    title:string,
    desc:string,
    imageDownload:string
    downloadName:string
    }

    const [bgImage,setBgImage] = useState<string>('/img/bg_home_v1.png')
    const location = useLocation()
    

    const allData:DataResult[] = [
        {
            imageBg:'/img/results/24.jpg',
            title: 'Seu pet é do POP',
            desc:'O seu bichinho é extremamente cativante e adorado por onde passa, além de conseguir se adaptar a diferentes ambientes',
            imageDownload:'/img/downloads/Group 2.jpg',
            downloadName: 'dog pop.jpg'
        },
        {
            imageBg:'/img/results/25.jpg',
            title: 'Seu pet é do FUNK',
            desc:'O seu bichinho é ousado e alto astral, gosta de se movimentar e de ter momentos de diversão com muitas pessoas, sempre animando o ambiente.',
            imageDownload:'/img/downloads/Group 3.jpg',
            downloadName: 'dog funk.jpg'
        },
        {
            imageBg:'/img/results/26.jpg',
            title: 'Seu pet é do ROCK',
            desc:'O seu bichinho tem uma personalidade forte e rebelde, preza pela liberdade acima de tudo e ama fazer barulho com os amigos.',
            imageDownload:'/img/downloads/Group 4.jpg',
            downloadName: 'dog SAMBA.jpg'
        },
        {
            imageBg:'/img/results/27.jpg',
            title: 'Seu pet é do SAMBA',
            desc:'O seu bichinho tem uma energia alegre e ensolarada, gosta de atividades ao ar livre e age de forma descontraída e vibrante. ',
            imageDownload:'/img/downloads/Group 5.jpg',
            downloadName: 'dog ROCK.jpg'
        },
        {
            imageBg:'/img/results/28.jpg',
            title: 'Seu pet é do BREGA',
            desc:'O seu bichinho é intenso e amoroso, está sempre pedindo colo para todos e não resiste a quem faz uma voz melosa. ',
            imageDownload:'/img/downloads/Group 6.jpg',
            downloadName: 'dog BREGA.jpg'
        }
        ,
        {
            imageBg:'/img/results/29.jpg',
            title: 'Seu pet é SERTANEJO',
            desc:' O seu bichinho é simples, fácil de agradar e pode gostar tanto de brincadeiras no campo, quanto de atividades joviais e divertidas ',
            imageDownload:'/img/downloads/Group 7.jpg',
            downloadName: 'dog SERTANEJO.jpg'
        }
        ,
        {
            imageBg:'/img/results/30.jpg',
            title: 'Seu pet é do MPB',
            desc:' O seu bichinho é tranquilo, sofisticado, valoriza momentos calmos com você e gosta de receber seu aconchego. ',
            imageDownload:'/img/downloads/Group 8.jpg',
            downloadName: 'dog MPB.jpg'
        },
        {
            imageBg:'/img/results/31.jpg',
            title: 'Seu pet é do FREVO',
            desc:' O seu bichinho é carismático, sempre está cheio de energia e pede todos os dias para brincar com os amigos na rua. ',
            imageDownload:'/img/downloads/Group 9.jpg',
            downloadName: 'dog FREVO.jpg'
        }
        ,
        {
            imageBg:'/img/results/32.jpg',
            title: 'Seu pet é do REGGAE',
            desc:'O seu bichinho é harmônico, pacífico, respeita os demais e prefere passeios sossegados em contato com a natureza ',
            imageDownload:'/img/downloads/Group 10.jpg',
            downloadName: 'dog REGGAE.jpg'
        },
        {
            imageBg:'/img/results/33.jpg',
            title: 'Seu pet é do RAP',
            desc:'O seu bichinho é autêntico, descolado e sempre que vê, ajuda outros animais que estão em situação de injustiça. ',
            imageDownload:'/img/downloads/Group 11.jpg',
            downloadName: 'dog RAP.jpg'
        },
        {
            imageBg:'/img/results/34.jpg',
            title: 'Seu pet é ECLÉTICO',
            desc:'Seu bichinho não se ancaixa nos padrões da sociedog, ele é do jeitinho dele, nem mais nem menos',
            imageDownload:'/img/downloads/Group 12.jpg',
            downloadName: 'dog ecletico.jpg'
        }
    ]
    

   
    const [actualData,setAD] = useState<DataResult>()
    const [moveButtons,setMB] = useState<CSSProperties>()

    

    useEffect(()=>{
        const data = location.state
        
        if (data[4]>=50 && data[3]>=50 && data[7]>=50 && data[9]>=50){
            setAD(allData[0])
            setBgImage(allData[0].imageBg)
        } else if(data[2]>=50 && data[3]>=50 && data[4]>=50 && data[9]>=50){
            setMB({marginLeft:'0px', marginRight:'-14rem'})
            setAD(allData[1])
            setBgImage(allData[1].imageBg)
        }
        else if(data[2]>=50 && data[3]>=50 && data[5]>=50 && data[8]>=50){
            setMB({marginLeft:'0px', marginRight:'-14rem'})
            setAD(allData[2])
            setBgImage(allData[2].imageBg)
        }
        else if(data[1]>=50 && data[3]>=50 && data[7]>=50 && data[9]>=50){
            setAD(allData[3])
            setBgImage(allData[3].imageBg)
        }else if(data[3]>=50 && data[6]>=50 && data[7]>=50 && data[9]>=50){
            setAD(allData[4])
            setBgImage(allData[4].imageBg)
        }
        else if(data[2]>=50 && data[3]>=50 && data[7]>=50 && data[9]>=50){
            setAD(allData[5])
            setBgImage(allData[5].imageBg)
        }
        else if(data[1]>=50 && data[6]>=50 && data[8]>=50 && data[10]>=50){
            setAD(allData[6])
            setBgImage(allData[6].imageBg)
        }
        else if(data[1]>=50 && data[3]>=50 && data[4]>=50 && data[9]>=50){
            setAD(allData[7])
            setBgImage(allData[7].imageBg)
        }
        else if(data[1]>=50 && data[6]>=50 && data[7]>=50 && data[9]>=50){
            setAD(allData[8])
            setBgImage(allData[8].imageBg)
        }
        else if(data[2]>=50 && data[4]>=50 && data[5]>=50 && data[9]>=50){
            setMB({marginLeft:'0px', marginRight:'-14rem'})
            setAD(allData[9])
            setBgImage(allData[9].imageBg)
        }
        else{
            setMB({marginLeft:'0px', marginRight:'-14rem'})
            setAD(allData[10])
            setBgImage(allData[10].imageBg)
        }
        console.log(data)
    },[])

    return(
        <>
        {
            actualData ?

            <div style={{backgroundImage:`url(${bgImage})`, backgroundSize:'cover'}} className={Style.containerResult}>
                <h1 className={Style.titleResult}>{actualData.title}</h1>
                <p className={Style.descResult}>{actualData.desc}</p>
                <div className={Style.containerButons} style={moveButtons}>
                    <a href={actualData.imageDownload} download={actualData.downloadName} ><button className={Style.buttonDownload}>BAIXAR IMAGEM</button></a>
                    <a href='https://open.spotify.com/playlist/67tqrnFLsyJRthVLlP5fXR?si=0KIuwwjSQ9aN46QAH-XxmQ&pi=cM8geF_AQHOsG ' target="_blank"><button className={Style.buttonDownload}>ESCUTE A PLAYLIST!</button></a>
                </div>
                
            </div>
            :
            <></>
        }
        </>
    )
}
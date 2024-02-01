import Title from "../title";
import Card from "./cards";

export default function CardsPlanos(){
    return(
        <div className="flex flex-col gap-y-12 ">
            <div className="w-full h-0.5 bg-white"></div>
            <Title title="CONFIRA NOSSOS PLANOS"/>
            <div className="flex flex-wrap gap-8 justify-center">
                <Card title="MENSAL" price="R$ 149,90" text="bla bla" />
                <Card title="ANUAL" price="12x R$89,90" text="bla bla" />
                <Card title="DIÁRIO" price="R$ 19,90" text="bla bla" />
            </div>
        </div>
    )
}
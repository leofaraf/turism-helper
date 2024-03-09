import { useContext } from "react"
import { RouterContext } from "./RouterProvider"
import Popup from "reactjs-popup"
import { GoX } from "react-icons/go";

const Footer = () => {
    const routerContext = useContext(RouterContext)
    
    return (
        <div className="flex w-full gap-3">
            <button className="bg-black w-1/3 text-white p-2 rounded-lg hover:bg-gray-800"
            onClick={() => window.location.reload()}>
                Сброс
            </button>
            <input className="bg-black w-1/3 rounded-lg text-white text-center"
                placeholder="введите макс. время в часах" type="number"
                onChange={(e) => e.target.value >= 0 && e.target.value <= 24 && routerContext.setMaxTime(e.target.value)}
                value={routerContext.maxTime} />
            <Popup modal nested trigger={
                <button className="bg-black w-1/3 text-white p-2 rounded-lg hover:bg-gray-800">
                Показать тур
                </button>
            }>
                {close => (
                <div className="bg-white drop-shadow-lg p-3 w-[90vw] h-[60vh] flex flex-col gap-3">
                    <div className="flex justify-between">
                        <p className="font-bold">Маршрут</p>
                        <button onClick={close}>
                        <GoX className="w-6 h-6"/>
                        </button>
                    </div>
                    <div>
                        
                    </div>
                    <div className="flex flex-col gap-4 overflow-y-auto">
                        {routerContext?.result?.errors?.length == 0 ? (
                            <>
                                {routerContext.result.data.map((item) => {
                                    let sight = routerContext.sights[item[0]]
                                    let trip = item[1]
                                    return (
                                        <>
                                            {trip && (
                                                <p className="text-sm">
                                                    Переход к другой достопремечательности {trip.duration} мин.
                                                </p>
                                            )}
                                            <div className="flex bg-gray-300 p-3 justify-between rounded-lg">
                                                <p>{sight.name}</p>
                                                <p>{sight.time} мин.</p>
                                            </div>
                                        </>
                                    )
                                })}
                                <div className="flex justify-between w-full">
                                    <p>Время маршрута: {routerContext.result.sumInMinuts} мин.</p>
                                    <p>Остаток: {routerContext.result.remainder} мин.</p>
                                </div>
                            </>
                        ) : (
                            <>
                                {routerContext.result.errors.map((e, i) => (
                                    <p key={i}>- {e}</p>
                                ))}
                            </>   
                        )}
                    </div>
                </div>
                )}
            </Popup>
        </div>
    )
}

export default Footer;
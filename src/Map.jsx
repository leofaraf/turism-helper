import { useContext } from "react"
import { Placemark, YMaps } from "react-yandex-maps"
import Popup from "reactjs-popup"
import { RouterContext } from "./RouterProvider"
import { GoX } from "react-icons/go";

function Map() {
    const routerContext = useContext(RouterContext)

    return (
        <>
            <YMaps>
                <Map width="100%" height="100%" defaultState={{ center: [51.66, 39.20], zoom: 12 }}>
                {routerContext.sights.map((sight, index) => {
                    let placemark_color = "gray"
                    if (sight.is_default) {
                    placemark_color = "red"
                    } else if (sight.priority == 5) {
                    placemark_color = "blue"
                    }

                    return (
                    <Popup modal nested trigger={
                        <Placemark geometry={sight.cords} options={{iconColor: placemark_color}}/>
                    }>
                        {close => (
                        <div className="flex flex-col gap-3 drop-shadow-lg bg-white w-64 p-3 rounded-lg">
                            <div className="flex items-center">
                            <p className="font-bold">{sight.name}</p>
                            <button onClick={close}>
                                <GoX className="w-6 h-6"/>
                            </button>
                            </div>
                            <p>Поставьте приоритет</p>
                            <input value={sight.priority} type="range" min="1" max="5" 
                            onChange={(e) => routerContext.setPriority(index, e.target.value)}/>
                            <button className={`${!sight.is_default ? 
                            "bg-black hover:bg-gray-800" : "bg-gray-600"} w-full text-white p-2 rounded-lg `}
                            onClick={() => routerContext.setDefault(index)}>
                            Устоновить как старт. поз.
                            </button>
                        </div>
                        )}
                    </Popup>
                    )
                })}
                </Map>
            </YMaps>
        </>
    )
}

export default Map;
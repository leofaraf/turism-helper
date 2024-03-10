import { createContext, useEffect, useState } from "react";
import { getDistance } from 'geolib'
export const RouterContext = createContext({})

class Trip {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.distance = this.getDistanceM(start, end);
    this.duration = this.getDurectionM(this.distance, this.distance < 1000  ? "walk" : "car");
  }

  getDurectionM(dist, mode) {
    let movePerMinute
    if (mode == "walk") {
        movePerMinute = 60
    } else if (mode == "car") {
        movePerMinute = 200
    }

    return Math.round(
      dist / movePerMinute
    ) 
  }
  
  
  getDistanceM(start, end) {
    return getDistance(
        { latitude: start[0], longitude: start[1] },
        { latitude: end[0], longitude: end[1] }
    )
  }
}

const RouterProvider = ({children}) => {
  const defualtSights = [
    {
      name: "Театр драмы им. Кольцова",
      time: 90,
      cords: [51.663803, 39.204636],
      priority: 1,
      is_default: false
    },
    {
      name: "Воронежский камерный театр",
      time: 90,
      cords: [51.665235, 39.202601],
      priority: 1,
      is_default: false
    },
    {
      name: "Воронежский государственный театр кукол имени В. А. Вольховского",
      time: 90,
      cords: [51.666279, 39.204842],
      priority: 1,
      is_default: false
    },
    {
      name: "Воронежский государственный театр юного зрителя",
      time: 120,
      cords: [51.660825, 39.204388],
      priority: 1,
      is_default: false
    },
    {
      name: "Воронежский областной художественный музей имени И.Н. Крамского",
      time: 120,
      cords: [51.673911, 39.209867],
      priority: 1,
      is_default: false
    },
    {
      name: "Воронежский концертный зал",
      time: 90,
      cords: [51.665984, 39.212326],
      priority: 1,
      is_default: false
    },
    {
      name: "Музей «Петровские корабли»",
      time: 60,
      cords: [51.661738, 39.188083],
      priority: 1,
      is_default: false
    },
    {
      name: "Музей «Гото Предестинация»",
      time: 0,
      cords: [51.655920, 39.216013],
      priority: 1,
      is_default: false
    },
    {
      name: "Музей «Арсенал»",
      time: 60,
      cords: [51.672951, 39.215640],
      priority: 1,
      is_default: false
    },
    {
      name: "Памятник «Белый Бим»",
      time: 0,
      cords: [51.666121, 39.205442],
      priority: 1,
      is_default: false
    },
    {
      name: "Памятник «В. С. Высоцкому»",
      time: 0,
      cords: [51.666579, 39.201626],
      priority: 1,
      is_default: false
    },
    {
      name: "Памятник «С.Я. Маршак»",
      time: 0,
      cords: [51.665917, 39.203484],
      priority: 1,
      is_default: false
    },
    {
      name: "Памятник «Сергею Есенину»",
      time: 0,
      cords: [51.662722, 39.206843],
      priority: 1,
      is_default: false
    },
    {
      name: "Памятник «Котёнок с улицы Лизюкова»",
      time: 0,
      cords: [51.706892, 39.172276],
      priority: 1,
      is_default: false
    },
    {
      name: "Памятник «Гавриил Николаевич Троепольский»",
      time: 0,
      cords: [51.675542, 39.206959],
      priority: 1,
      is_default: false
    },
    {
      name: "Памятник «Фронтовому почтальону»",
      time: 0,
      cords: [51.671320, 39.209644],
      priority: 1,
      is_default: false
    },
    {
      name: "Воронежский государственный природный биосферный заповедник имени В. Н. Пескова",
      time: 180,
      cords: [51.944049, 39.608338],
      priority: 1,
      is_default: false
    },
    {
      name: "Червлёный Яр",
      time: 180,
      cords: [51.537440, 39.143708],
      priority: 1,
      is_default: false
    },
    {
      name: "Воронежский зоопарк имени А.С. Попова",
      time: 60,
      cords: [51.642306, 39.241604],
      priority: 1,
      is_default: false
    },
    {
      name: "Парк «Орлёнок»",
      time: 20,
      cords: [51.675241, 39.208387],
      priority: 1,
      is_default: false
    },
    {
      name: "Парк «Дельфин»",
      time: 30,
      cords: [51.685853, 39.253000],
      priority: 1,
      is_default: false
    },
    {
      name: "Центральный городской парк",
      time: 60,
      cords: [51.696656, 39.222386],
      priority: 1,
      is_default: false
    },
    {
      name: "Бульвар Чернавская Дамба",
      time: 60,
      cords: [51.671717, 39.235188],
      priority: 1,
      is_default: false
    },
    {
      name: "Советская площадь",
      time: 30,
      cords: [51.665339, 39.211390],
      priority: 1,
      is_default: false
    },
    {
      name: "Площадь Победы",
      time: 10,
      cords: [51.671396, 39.210967],
      priority: 1,
      is_default: false
    },
    {
      name: "Успенский Адмиралтейский храм",
      time: 0,
      cords: [51.656569, 39.214411],
      priority: 1,
      is_default: false
    },
    {
      name: "Кафедральный собор Благовещения Пресвятой Богородицы ",
      time: 0,
      cords: [51.676129, 39.210565],
      priority: 1,
      is_default: false
    },
    {
      name: "Алексеево-Акатов монастырь",
      time: 0,
      cords: [51.674736, 39.223622],
      priority: 1,
      is_default: false
    },
    {
      name: "Океанариум",
      time: 90,
      cords: [51.790973, 39.207308],
      priority: 1,
      is_default: false
    },
    {
      name: "Каменный мост",
      time: 0,
      cords: [51.661144, 39.207537],
      priority: 1,
      is_default: false
    },
    {
      name: "Дворец Ольденбургских",
      time: 90,
      cords: [51.908098, 39.340491],
      priority: 1,
      is_default: false
    },
    {
      name: "Воронежская областная универсальная научная библиотека имени И. С. Никитина",
      time: 60,
      cords: [51.659766, 39.200868],
      priority: 1,
      is_default: false
    },
    {
      name: "Петровский сквер",
      time: 10,
      cords: [51.673789, 39.211687],
      priority: 1,
      is_default: false
    },
    {
      name: "Кольцовский сквер",
      time: 10,
      cords: [51.661775, 39.202032],
      priority: 1,
      is_default: false
    },
    {
      name: "Дом архитектора имени П. П. Даниленко",
      time: 30,
      cords: [51.666220, 39.195118],
      priority: 1,
      is_default: false
    },
  ]
  const [sights, setSights] = useState(defualtSights)
  const [result, setResult] = useState({
    data: [], // [[sight_index, is_start ? null : trip_in_minuts]]
    sumInMinuts: 0,
    remainder: 0,
    errors: []
  })
  const [maxTime, setMaxTime] = useState(null)

  const setPriority = (index, priority) => {
    setSights(
      sights.map((v, i) => i == index ? {...v, priority} : v)
    )
  }

  const setDefault = (index) => {
    setSights(
      sights.map((v, i) => (i == index ? {...v, is_default: true} : {...v, is_default: false}))
    )
  }

  function dijkstra(graph) {
    console.log("Algorightm started")
    const numNodes = graph.length;
    const visited = new Array(numNodes).fill(false);
    const path = [];
    console.log("Init: ", numNodes, visited, path)
    
    // Start from the first node
    let currentNode = 0;
    visited[currentNode] = true;
    path.push(currentNode);
  
    for (let i = 1; i < numNodes; i++) {
      let nearestNeighbor = null;
      let minDistance = Infinity;
  
      for (let j = 0; j < numNodes; j++) {
        console.log("J ", j)
        console.log("Visited: ", visited)
        console.log(graph[currentNode][j].distance, minDistance)
        if (!visited[j] && graph[currentNode][j].distance < minDistance) {
          nearestNeighbor = j;
          minDistance = graph[currentNode][j].distance;
          console.log("Min dist", minDistance)
        }
      }
  
      if (nearestNeighbor !== null) {
        visited[nearestNeighbor] = true;
        path.push(nearestNeighbor);
        currentNode = nearestNeighbor;
      }

      console.log("Init: ", i, numNodes, visited, path)
    }
  
    return path;
  }

  useEffect(() => {
    let start = []
    let others = []
    let counter_of_max = 0 
    sights.map((v, i) => {
      if (v.is_default) {
        start.push([v, i])
      } else {
        if (v.priority == 5) {
          others.push([v, i])
          counter_of_max += 1
        }
      }
    })

    let m = start.concat(others)
    console.log("Merged: ", m)

    let errors = []
    if (!start.length > 0) errors.push("Устоновите стартовую позицию")
    if (!maxTime > 0) errors.push("Устоновите макс. время")

    let data = []
    let sumInMinuts = 0
    let maxTimeInMinutes = maxTime*60
    
    if (errors.length == 0) {
      let graph = []
      m.map((pair1) => {
        let distances = m.map(pair2 => new Trip(pair1[0].cords, pair2[0].cords))
        graph.push(distances)
      })

      const optimalPath = dijkstra(graph);
      console.log("Optimal path:", optimalPath);
      console.log("Graph:", graph);

      for (let i = 0; i < optimalPath.length;  i++) {
        let is_start = i == 0;
        // Merged entry
        let mEntry = m[optimalPath[i]] // [sight_value, sight_index]
        console.log("Entry: ", mEntry)
        // Can we go to the next sight or time is expended?
        let additionalTime = mEntry[0].time
        let trip = null
        console.log("Addition time without trip: ", additionalTime)
        if (!is_start) {
          trip = graph[optimalPath[i]][optimalPath[i-1]]
          console.log("Trip to ", mEntry[1], ":", trip)
          additionalTime += trip.duration
        }
        console.log("Addition time: ", additionalTime)
        console.log("(sumInMinuts + additionalTime) = ", (sumInMinuts + additionalTime))
        console.log("Max time in minutes: ", maxTimeInMinutes)
        if (maxTimeInMinutes >= (sumInMinuts + additionalTime)) {
          console.log("Adding additional time")
          sumInMinuts += additionalTime
          console.log("Adding trip to the route")
          data.push([mEntry[1], trip])
          console.log("Data in the aftermath pushing: ", data)
        } else {
          break
        }
      }
    }


    setResult({
      data,
      sumInMinuts,
      remainder: maxTimeInMinutes-sumInMinuts,
      errors
    })
  }, [sights, maxTime])

  useEffect(() => {
    console.log("Result was updated: ", result)
  }, [result])

  return (
      <RouterContext.Provider value={{sights, setPriority, setDefault, maxTime, setMaxTime, result}}>
          {children}
      </RouterContext.Provider>
  )
}

export default RouterProvider;
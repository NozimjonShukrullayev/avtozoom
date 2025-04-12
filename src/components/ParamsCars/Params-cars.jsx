import { useParams } from "react-router-dom"
import UseGetCars from "../../api/cars/get-cars.byid.api"
import Slickdots from "./paramsmodule/slikdots"

const ParamsCars = () => {

  const {id} = useParams()

const {data,isLoading} = UseGetCars(id)

return (
    <div className="container-global">
      {isLoading ?<h1>Loading...</h1> :<Slickdots data={data?.data.filter(car=> car.id === id)} />}
    </div>
  )
}

export default ParamsCars
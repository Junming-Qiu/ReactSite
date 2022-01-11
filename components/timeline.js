import { Chrono } from "react-chrono";


function TimeLine(props){
  const items = props.info.map(function(info){
    return (
      {
        title: info.when,
        cardTitle: info.name,
        cardSubtitle: info.where
      }
    )
  })

  return (
    <div className="tw-h-[68vh]">
      <Chrono mode="VERTICAL_ALTERNATING" useReadMore="true" hideControls cardHeight="" items={items}>
        {props.info.map(function(info){
          return (
            <ul key={info.name} className="tw-list-disc">
              {info.desc.map(function(desc){
                return (
                  <li key={desc}>
                    {desc}
                  </li>
                )
              })}
            </ul>
          )
        })}
      </Chrono>
    </div>  
  )
}

export default TimeLine;
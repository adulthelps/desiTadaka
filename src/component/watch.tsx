import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../Redux/reducer/combineReducer';
import { useSelector } from 'react-redux';
import './details.scss'
export const Watch:React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const data = useSelector((state: RootState) => state.reducers.CollectionData);
    let link:string|undefined="";

  return (
    <div className='containers'>
        <div className="dashboards">
        {data
          .filter((val) => val.id === parseInt(id!))
          .map((val) => {
           link=val.body.links;
            const styles = {
              backgroundImage: `url(${val.image})`,
              backgroundClip: "text",
              color: "transparent",
            };
            return (
              <div className="detail-container" key={val.id + 1}>
                <img src={val.image} alt="img" />
                <p className="para" style={styles}>
                  {val.body.name}
                </p>
              </div>
            );
          })}
      </div>
      <div className="watching">
      <button onClick={() => window.open(link)} className="watch-button">
            Watch
          </button>
      </div>
    </div>
  )
}


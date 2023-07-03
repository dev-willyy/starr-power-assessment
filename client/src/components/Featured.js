import featuredData from '../data/featuredData';
import useFetch from './../custom-hooks/useFetch';
import baseURL from '../baseURL';
import './../styles/featured.css';

function Featured() {
  const { data, loading, error } = useFetch(`${baseURL}/hotels/countByCityName?cities=paris,abuja,london,lagos`);
  console.log(data);

  return (
    <div className="featured">
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          {data.map((propertyNum, index) => (
            <div className="featuredItem" key={index}>
              <img src={featuredData[index].imgSrc} alt="" className="featuredImg" />
              <div className="featuredTitles">
                <h1>{featuredData[index].h1Text}</h1>
                <h2>{propertyNum} {propertyNum === 1 ? 'property' : 'properties'} </h2>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Featured;

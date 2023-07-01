import baseURL from '../baseURL';
import useFetch from '../custom-hooks/useFetch';
import { images } from '../data/propertyListData';
import '../styles/propertyList.css';

function PropertyList() {
  const { data, loading, error } = useFetch(`${baseURL}/hotels/countByType`);

  return (
    <div className="pList">
      {loading ? (
        'loading'
      ) : (
        <>
          {data &&
            images.map((image, i) => (
              <div className="pListItem" key={i}>
                <img src={image} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;

import footerListData from '../data/footerListData';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        {footerListData.map((footerData) => (
          <ul className="fList" key={footerData.id}>
            <li className="fListItem">{footerData.liOne}</li>
            <li className="fListItem">{footerData.liTwo}</li>
            <li className="fListItem">{footerData.liThree}</li>
            <li className="fListItem">{footerData.liFour}</li>
            <li className="fListItem">{footerData.liFive}</li>
            <li className="fListItem">{footerData.liSix}</li>
            <li className="fListItem">{footerData.liSeven}</li>
            <li className="fListItem">{footerData.liEight}</li>
          </ul>
        ))}
      </div>
      <div className="fText">Copyright © 2023 Hotelify | developed from scratch by Williams Madu</div>
    </div>
  );
};

export default Footer;

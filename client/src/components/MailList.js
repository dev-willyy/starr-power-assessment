import '../styles/mailList.css';

function MailList() {
  return (
    <div className="mail">
      <h1 className="mailTitle">Optimize time, Optimize finances!</h1>
      <span className="mailDesc">Join today and receive top-notch deals tailored just for you!</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Enrol</button>
      </div>
    </div>
  );
};

export default MailList;

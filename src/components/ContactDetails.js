const ContactDetails = (props) => {
  return (
    <div className="flex items-center mb-4 shadow-md w-64 p-2 bg-orange-500 rounded-md hover:bg-orange-400 hover:cursor-pointer transition duration-200">
      <div>
        <img src={props.avatar} alt="img" className="h-16 w-16 rounded-full " />
      </div>
      <div className="ml-5 text-white">{props.name}</div>
    </div>
  );
};

export default ContactDetails;

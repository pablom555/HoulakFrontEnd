interface FormInputProps {
  value: string;
  onInputChange: Function;
  onSearchClickHandle: () => void;
}

  const FormInput = ({value, onInputChange, onSearchClickHandle }: FormInputProps) => {

  return (
    <div className="w-full h-9 my-5 mx-0 flex">
      <input
        className="flex-1 outline-none my-0 border-2 border-gray-500 p-2"
        type="text"
        name="artistName"
        required
        placeholder="Artist Name"
        value={value}
        onChange={e => onInputChange(e.target.value)}
      />
      <button
        className="flex-1 outline-none my-0 bg-gray-500 text-white tracking-widest cursor-pointer rounded-r-md disabled:cursor-not-allowed hover:bg-gray-600 disabled:hover:bg-gray-500"
        onClick={onSearchClickHandle}
        disabled={!value}
      >
        Search
      </button>
    </div>
  );
};

export default FormInput;
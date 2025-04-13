export default function SignIn() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <LabelledInput label='Username' placeholder='Username' />
      <LabelledInput label='Password' type={"password"} placeholder='123456' />
      <button type='button' className='bg-blue-500 rounded px-3 py-1.5'>
        Sign In
      </button>
    </div>
  );
}

interface labelledInputType {
  label: string;
  placeholder: string;
  type?: string;
}

function LabelledInput({ label, placeholder, type }: labelledInputType) {
  return (
    <div>
      <label className='block'>{label}</label>
      <input
        className='border border-white'
        type={type || "text"} // type = {label == "Password" ? "password" : "text"}
        placeholder={placeholder}
      />
    </div>
  );
}

// w-fit for button takes as much as width as needed.

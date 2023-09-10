import AddMessage from "./addMessage"

const Write = async () => {
    return (
      <div className="text-center px-4">
        <div className="text-glow text-3xl sm:text-6xl">
          <h1>Kira Will Deliver.</h1>
        </div>

        <div className="text-glow text-xl sm:text-4xl mt-10">
          <p>Have you been wronged? Have you witnessed an</p>
          <p>unforgivable crime? Has the ‘justice system’ failed</p>
          <p>to bring the vermin of this world to justice?</p>
        </div>

        <div className="text-glow text-xl sm:text-4xl mt-10">
          <p>Do you want justice?</p>
        </div>

        <div className="text-glow text-xl sm:text-4xl font-bold mt-10">
          <p>All Kira needs is a name.</p>
        </div>

        <AddMessage />
      </div>
    )
}

export default Write

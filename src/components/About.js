
export default function About() {
   

        
  return (
    <div className="container my-4"> 
        <div className="accordion" id="accordionExample" >
  <div className="accordion-item" >
    <h2 className="accordion-header" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
        About the website
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Our text editor application is designed to provide users with a powerful and flexible tool for text manipulation. With our app, you can easily convert text to uppercase or lowercase, clear the text area, copy text to the clipboard, and adjust the font size to your preference. The app aims to enhance productivity and streamline your text editing tasks.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
      Why Choose Us?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        Our text editor stands out for its simplicity, efficiency, and user-friendly interface. Whether you're a student, writer, or professional, our app is tailored to meet your text editing needs. We continuously improve the app based on user feedback to ensure it remains a reliable and effective tool for all your text-related tasks.
      </div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
      Key Features
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <li>Convert text to uppercase or lowercase with a single click.</li>
                <li>Clear the text area quickly and easily.</li>
                <li>Copy text to the clipboard for use in other applications.</li>
                <li>Adjust the font size to suit your needs.</li>
                <li>Real-time word and character count.</li>
                <li>Estimated reading time based on word count.</li>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}

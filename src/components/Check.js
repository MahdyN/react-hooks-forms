import React, { useState } from "react";

function Check() {
  const [newsletter, setNewsletter] = useState(false);

  function handleNewsletterChange(event) {   // For checkbox type inputs we use the checked attribute to change the boolean from false to true and render a check in the box whenever we click inside the checkbox
    setNewsletter(event.target.checked);
  }

  return (
    <form>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsletter}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Check;
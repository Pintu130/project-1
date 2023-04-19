import React from 'react'

const Todo = () => {
  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src='' alt=''/>
                <figcaption>Add Your List Here</figcaption>
            </figure>
        </div>
        <div className="input">
                  <div class="relative mb-3 xl:w-96" data-te-input-wrapper-init>
                      <input
                          type="text"
                          class=""
                          id="exampleFormControlInput1"
                          placeholder="Example label" />
                      <label
                          for="exampleFormControlInput1"
                          class=""
                      >Example label
                      </label>
                  </div>
        </div>
      </div>
    </>
  )
}

export default Todo

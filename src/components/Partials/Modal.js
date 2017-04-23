import React from 'react'

class Modal extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <div className="modal fade" id="ajaxModal" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
                </button>
                <h4 className="modal-title">Quick Property Sumbit</h4>
              </div>
              <form className="form-horizontal">
                <fieldset>
                  {/* Select Basic */}
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="selectbasic">Property Type :</label>
                    <div className="col-md-8">
                      <select id="selectbasic" name="selectbasic" className="form-control">
                        <option value={1}>Apartman</option>
                        <option value={2}>House</option>
                        <option value={3}>Villa</option>
                      </select>
                    </div>
                  </div>
                  {/* Multiple Radios */}
                  <div className="form-group">
                    <label className="col-md-4 control-label">Listing Type :</label>
                    <div className="col-md-8">
                      <div className="radio">
                        <label htmlFor="radios-0">
                          <input type="radio" name="radios" id="radios-0" defaultValue={1} defaultChecked="checked" />Sale
                        </label>
                      </div>
                      <div className="radio">
                        <label>
                          <input type="radio" name="radios" id="radios-1" defaultValue={2} />Rent
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="textinput">Listing name</label>
                    <div className="col-md-8">
                      <input id="textinput" name="textinput" type="text" placeholder="Name your listing" className="form-control input-md" required />
                    </div>
                  </div>
                  {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="textinput">Bedrooms :</label>
                    <div className="col-md-8">
                      <input id="textinput2" name="textinput" type="text" placeholder className="form-control input-md" />
                    </div>
                  </div>
                  {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="textinput">Bathrooms :</label>
                    <div className="col-md-8">
                      <input id="textinput3" name="textinput" type="text" placeholder className="form-control input-md" />
                    </div>
                  </div>
                  {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="textinput">Floor Number :</label>
                    <div className="col-md-8">
                      <input id="textinput4" name="textinput" type="text" placeholder className="form-control input-md" />
                    </div>
                  </div>
                  {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="textinput">Built Up Area :</label>
                    <div className="col-md-8">
                      <input id="textinput5" name="textinput" type="text" placeholder className="form-control input-md" />
                    </div>
                  </div>
                  {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="textinput">Built Year :</label>
                    <div className="col-md-8">
                      <input id="textinput6" name="textinput" type="text" placeholder className="form-control input-md" />
                    </div>
                  </div>
                  {/* Select Basic */}
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="selectbasic">Country :</label>
                    <div className="col-md-8">
                      <select id="selectbasic1" name="selectbasic" className="form-control">
                        <option value={1}>USA</option>
                        <option value={2}>FBiH</option>
                        <option value={4}>Austria</option>
                        <option value>Germany</option>
                      </select>
                    </div>
                  </div>
                  {/* Select Basic */}
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="selectbasic">State :</label>
                    <div className="col-md-8">
                      <select id="selectbasic2" name="selectbasic" className="form-control">
                        <option value={1}>BiH</option>
                        <option value={2}>NY</option>
                      </select>
                    </div>
                  </div>
                  {/* Select Basic */}
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="selectbasic">City :</label>
                    <div className="col-md-8">
                      <select id="selectbasic3" name="selectbasic" className="form-control">
                        <option value={1}>Sarajevo</option>
                        <option value={2}>Tuzla</option>
                      </select>
                    </div>
                  </div>
                  {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="textinput">Neighborhood :</label>
                    <div className="col-md-8">
                      <input id="textinput7" name="textinput" type="text" placeholder className="form-control input-md" />
                    </div>
                  </div>
                  {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="textinput">Longitude :</label>
                    <div className="col-md-8">
                      <input id="textinput8" name="textinput" type="text" placeholder="W40° 50" className="form-control input-md" />
                    </div>
                  </div>
                  {/* Text input*/}
                  <div className="form-group">
                    <label className="col-md-4 control-label" htmlFor="textinput">Latitude :</label>
                    <div className="col-md-8">
                      <input id="textinput9" name="textinput" type="text" placeholder="N40° 50" className="form-control input-md" />
                    </div>
                  </div>
                  {/* Multiple Checkboxes */}
                  <div className="form-group">
                    <label className="col-md-4 control-label">Multiple Checkboxes</label>
                    <div className="col-md-8">
                      <div className="checkbox">
                        <label htmlFor="checkboxes-0">
                          <input type="checkbox" name="checkboxes" id="checkboxes-0" defaultValue={1} />Option one
                        </label>
                      </div>
                      <div className="checkbox">
                        <label htmlFor="checkboxes-1">
                          <input type="checkbox" name="checkboxes" id="checkboxes-1" defaultValue={2} />Option two
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* File Button */}
                  <div className="form-group">
                    <label className="col-md-4 control-label">Images</label>
                    <div className="col-md-8">
                      <input id="filebutton" name="filebutton" className="input-file" type="file" />
                    </div>
                  </div>
                  {/* Textarea */}
                  <div className="form-group">
                    <label className="col-md-4 control-label">Property Description</label>
                    <div className="col-md-8">
                      <textarea className="form-control" id="textarea" name="textarea" defaultValue={"Your description"} />
                    </div>
                  </div>
                  {/* Multiple Checkboxes */}
                  <div className="form-group">
                    <label className="col-md-4 control-label">Select type</label>
                    <div className="col-md-8">
                      <div className="checkbox">
                        <label htmlFor="checkboxes-4">
                          <input type="checkbox" name="checkboxes" id="checkboxes-4" defaultValue={4} />Regular listing $5
                        </label>
                      </div>
                      <div className="checkbox">
                        <label htmlFor="checkboxes-5">
                          <input type="checkbox" name="checkboxes" id="checkboxes-5" defaultValue={5} />featured listing $20
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Button (Double) */}
                  <div className="form-group">
                    <label className="col-md-4 control-label" />
                    <div className="col-md-8">
                      <button id="button1id" name="button1id" className="btn btn-raised ripple-effect btn-success">Sumbit</button> T H E M E L O C K .C O M
                      <button id="button2id" name="button2id" className="btn btn-raised ripple-effect btn-danger">Clear</button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export {Modal as default}

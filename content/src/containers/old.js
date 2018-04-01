<form>
                        <fieldset>
                            <div className="row">
                                <div className="col-sm-12">
                                    <label>Quiz Name:
                                        {/* <input className="form-control" type="text" placeholder="Quiz Name" /> */}
                                        <input className="form-control" type="text" ref={quizName => this.inputQuizName = quizName} placeholder="Quiz Name" />
                                    </label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <legend>List of Questions</legend>
                                    <button className="btn btn-info" onClick={this.handleShow} type="button">Add Question</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    {this.state.questions}
                                </div>
                            </div>
                        </fieldset>
                    </form>
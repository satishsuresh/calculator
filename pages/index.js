import { Component } from "react";

 export default class calci extends Component {
   constructor(){
     super();
     this.state = {
      input: null,
      result:0,
     };
     this.isChange = this.isChange.bind(this);
     this.operation = this.operation.bind(this);
     this.add = this.add.bind(this);
     this.sub = this.sub.bind(this);
     this.mux = this.mux.bind(this);
     this.div = this.div.bind(this);
    }

    isChange(event) {
      this.setState({
        input: event.target.value, 
      });
      console.log(event.target.value);
    }
    
    add() {
      if(this.state.input.slice(-1)=="+"||this.state.input.slice(-1)=="-"||this.state.input.slice(-1)=="*"||this.state.input.slice(-1)=="/" ){
      
        this.setState({
        
          input: this.state.input.replace(this.state.input.slice(-1),"+")
  
        });
      }else {
      this.setState({
        
        input: this.state.input + "+",

      });

        }
          }

    sub() {
        if(this.state.input.slice(-1)=="+"||this.state.input.slice(-1)=="-"||this.state.input.slice(-1)=="*"||this.state.input.slice(-1)=="/" ){
          console.log(this.state.input.slice(-1));
          this.setState({
          
            input: this.state.input.replace(this.state.input.slice(-1),"-")
    
          });
        }else {
      this.setState({
        input: this.state.input + "-", 
      });
    }
  }
    mux() {
        if(this.state.input.slice(-1)=="+"||this.state.input.slice(-1)=="-"||this.state.input.slice(-1)=="*"||this.state.input.slice(-1)=="/" ){
          this.setState({
          
            input: this.state.input.replace(this.state.input.slice(-1),"*")
    
          });
        }else{
      this.setState({
        input: this.state.input + "*", 
      });
      console.log(this.state.input);
    }
  }
    div() {
        if(this.state.input.slice(-1)=="+"||this.state.input.slice(-1)=="-"||this.state.input.slice(-1)=="*"||this.state.input.slice(-1)=="/" ){
          this.setState({
          
            input: this.state.input.replace(this.state.input.slice(-1),"/")
    
          });
        }else{
      this.setState({
        input: this.state.input + "/", 
      });
    }
  }
    


operation(operator) {
   console.log(this.state.input)
   var a=this.state.input;
   var b=this.state.input1;
   var sum=this.state.input;

     if(a.includes("+")){
     var sum=this.state.input.split("+")
     var result=parseInt(sum[0])+parseInt(sum[1]);
     this.setState({input:result})
    }
    
     else if(a.includes("-")){
      var sum=this.state.input.split("-")
      var result=parseInt(sum[0])-parseInt(sum[1]);
      this.setState({input:result})
     }
     else if(a.includes("*")){
      var sum=this.state.input.split("*")
      var result=parseInt(sum[0])*parseInt(sum[1]);
      this.setState({input:result})
     }
     else if(a.includes("/")){
      var sum=this.state.input.split("/")
      var result=parseInt(sum[0])/parseInt(sum[1]);
      this.setState({input:result})
     }
    }
    
render() {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col-md-6">
          <input  name="input" className="form-control" placeholder="input" value={this.state.input} onChange={this.isChange}/>
          
        </div>
       
        <button className="btn btn-primary" onClick={this.add}>+ </button>
        <button className="btn btn-primary" onClick={this.sub}>- </button>
        <button className="btn btn-primary" onClick={this.mux}>* </button>
        <button className="btn btn-primary" onClick={this.div}>/ </button>
        <button className="btn btn-primary" onClick={this.operation}>= </button>
        {this.state.result != 0 ? <div>{this.state.result}</div> : ""}
        </div>
      </div>
  );
  }
 }

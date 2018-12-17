$.ajax({
	url:'/service.xsodata/dataService',
	type:'GET',
	success: function(result){
		
		var tableData = result.d.results;
		
		
		var TableComponent = React.createClass({ displayName: "TableComponent",


		  render: function render() {
		  	
		  	for(var i=0; i<this.props.data.length; i++){
				delete this.props.data[i]["__metadata"]
			}
		  	
		    // Data
		    var dataColumns = []
		    if(this.props.data[0]){
		    	 dataColumns = Object.keys(this.props.data[0]);
		    }
		    
		    var dataRows = this.props.data;
		
		    var tableHeaders = React.createElement("thead", null,
		      React.createElement("tr", null,
		        dataColumns.map(function (column) {
		          return React.createElement("th", null, column);})));
		
		
		
		    var tableBody = dataRows.map(function (row) {
		      return (
		        React.createElement("tr", null,
		          dataColumns.map(function (column) {
		            return React.createElement("td", null, row[column]);})));
		    });
		
		    // Decorate with Bootstrap CSS
		    return React.createElement("table", { className: "table table-bordered table-hover", width: "100%" },
		      tableHeaders,
		      tableBody);
			} 
			
		});

		
		ReactDOM.render(
		React.createElement(TableComponent, { data: tableData }),
		document.getElementById('table-component'));
    }
});



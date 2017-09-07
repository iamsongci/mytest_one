var Dropzone = function () {
    //function to initiate DropzoneJS 
    var runDropzone = function () {
        //for more information about Server side implementation
        //please visit http://www.dropzonejs.com/
        $(".dropzone").dropzone({
            paramName: "file", // The name that will be used to transfer the file
            maxFilesize: 5.0, // MB
            addRemoveLinks: true
        });
    };
    return {
        init: function () {
            runDropzone();
        }
    };
}();


exports.up = function(db){
    db.createTable("class", function() {
        this.primaryKey("id");
        this.semester("char", {size:10});
        this.name(String);
        this.subject(String);
        this.description("text");
        this.graded(Boolean, {"default":true});
    });
};

exports.down = function(db){
    db.dropTable("class");
}
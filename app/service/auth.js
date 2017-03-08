userManagement.service('AuthService', function ($scope, $localStorage) {
    var key;
    var id;
    return {
        getKey: function () {
            return $localStorage.key;
        },
        setKey: function (value) {
            alert($localStorage);
            key = value;
            $localStorage.key = value;
        },
        getId: function () {
            alert($localStorage);
            alert($localStorage.id);
            return $localStorage.id;
        },
        setId: function (value) {
            id = value;
            $localStorage.id = value;
        },
        reset: function () {
            $localStorage.$reset();
        }
    };
});
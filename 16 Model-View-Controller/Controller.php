<?php
class Controller {
    private $model;

    public function __construct() {
        $this->model = new Model();
    }

    public function list_it() {
        $this->messages = $this->model->messages();
        include("View.php");
    }

    public function send() {
		$nick = $_POST["nick"];
        if ($nick != ""){
            setcookie("nick", $nick);
            $user = $nick;
        } else {
            $user = $_COOKIE['nick'];
        }
        $this->model->add_message($user, $_POST["message"]);
        header("Location: Chat.php?action=list_it");
    }
}
?>

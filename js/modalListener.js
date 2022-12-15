export default class ModalListener {
    closed = true;

    close () {
        this.closed = true;
    }
    
    continue () {
        this.closed = false;
    }

    isClosed() {
        return this.closed;
    }
}
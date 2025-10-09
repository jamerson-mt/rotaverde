export class Contador {
  private startTime: number | null = null;
  private elapsedTime: number = 0;
  private intervalId: number | null = null;

  start() {
    if (!this.startTime) {
      this.startTime = Date.now();
      this.intervalId = window.setInterval(() => {
        this.elapsedTime = Date.now() - this.startTime!;
      }, 1000);
    }
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.startTime) {
      this.elapsedTime = Date.now() - this.startTime;
      this.startTime = null;
    }
  }

  reset() {
    this.stop();
    this.elapsedTime = 0;
  }

  getElapsedTime() {
    return Math.floor(this.elapsedTime / 1000); // Retorna o tempo em segundos
  }
}

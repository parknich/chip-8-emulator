class RomBuffer {
    constructor(fileContents) {
        this.data = []
        const buffer = fileContents
        for (let i = 0; i < buffer.length; i += 2) {
            this.data.push((buffer[i] << 8) | (buffer[i + 1] << 0))
        }
    }
}
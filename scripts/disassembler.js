const { instructionSet } = require("../data/instructionSet")

const Disassembler = {
    disassemble(opcode) {
        const instruction = instructionSet.find(
            instruction => (opcode & instruction.mask) === instruction.pattern
        )

        const args = instruction.arguments.map(arg => (opcode & arg.mask) >> arg.shift)

        return { instruction, args }
    },

  /**
   * A - Address
   * N, NN - Constant
   * R - Register
   * K - Key
   * A - Address
   * V0 - V0
   * I, [ I ] - Implied
   * DT - Delay Timer
   * ST - Sount Timer
   * B - BCD
   * DW - Data Word
   */

    format(decodedInstruction) {
        const types = decodedInstruction.instruction.arguments.map(arg => arg.type)
        const rawArgs = decodedInstruction.args
    }
}

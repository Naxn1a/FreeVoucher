const voucher_codes = require("voucher-code-generator");

export default function getCode(prefix: string) {
    const code = voucher_codes.generate({
        prefix: `${prefix}-`,
        length: 8,
    });
    return code[0];
}

// Generate code
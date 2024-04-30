function saveToExcel() {
    // Get form data
    var formData = {
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      email: document.getElementById('email').value
    };
  
    // Convert form data to Excel format
    var worksheet = XLSX.utils.json_to_sheet([formData]);
    var workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
  
    // Convert workbook to a binary string
    var wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'binary' });
  
    // Save Excel file
    var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'data.xlsx';
    a.click();
    setTimeout(() => { URL.revokeObjectURL(url); }, 100);
  }
  
  // Convert string to ArrayBuffer
  function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }
  
[HttpPost]
public async Task<ActionResult<FormModel>> Create([FromBody] FormModel form)
{
    if (!ModelState.IsValid)
    {
        return BadRequest(new
        {
            Message = "Erro de validação nos dados enviados.",
            Errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage))
        });
    }

    try
    {
        // Validação adicional
        if (string.IsNullOrWhiteSpace(form.UserId))
        {
            return BadRequest(new { Message = "O campo 'UserId' é obrigatório." });
        }

        _context.forms.Add(form);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetById), new { id = form.Id }, form);
    }
    catch (DbUpdateException ex)
    {
        return StatusCode(500, new
        {
            Message = "Erro ao salvar os dados no banco de dados.",
            Details = ex.InnerException?.Message ?? ex.Message
        });
    }
    catch (Exception ex)
    {
        return StatusCode(500, new
        {
            Message = "Ocorreu um erro inesperado.",
            Details = ex.Message
        });
    }
}

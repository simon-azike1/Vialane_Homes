with open('src/app/contact/page.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace Country input with dropdown
content = content.replace(
    '                  <Field label="Country">\n                    <input type="text" required placeholder="e.g. Nigeria, UK, US"\n                           value={form.country} onChange={set(\'country\')}\n                           className={inputCls} />\n                  </Field>',
    '''                  <Field label="Country">
                    <select value={form.country} onChange={set('country')}
                            className={`${inputCls} appearance-none cursor-pointer`}>
                      <option value="">Select your country</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Egypt">Egypt</option>
                      <option value="Morocco">Morocco</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Canada">Canada</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Italy">Italy</option>
                      <option value="Spain">Spain</option>
                      <option value="Portugal">Portugal</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Oman">Oman</option>
                      <option value="Turkey">Turkey</option>
                      <option value="China">China</option>
                      <option value="India">India</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Australia">Australia</option>
                      <option value="Other">Other</option>
                    </select>
                  </Field>'''
)

with open('src/app/contact/page.jsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("Updated Country field to dropdown")

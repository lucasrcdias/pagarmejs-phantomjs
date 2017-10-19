require 'rails_helper'

RSpec.feature 'Home', js: true do
  scenario 'working' do
    visit root_path

    expect(page).to have_content('PagarMe JS with PhantomJS')
  end
end

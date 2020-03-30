class AddRememberDigestToUsers < ActiveRecord::Migration
  def change    # function defenition
    add_column :users, :remember_digest, :string
  end
end

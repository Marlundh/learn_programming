class AddIndexToUsersEmail < ActiveRecord::Migration
  def change    # function defenition
    add_index :users, :email, unique: true
  end
end
